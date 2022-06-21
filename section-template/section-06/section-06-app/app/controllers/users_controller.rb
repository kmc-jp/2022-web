require "json"
require 'securerandom'

class UsersController < ApplicationController
  before_action :session_login_user_params, only: :destroy

  # GET /users
  def index
    if JSON.parse(params["user"])["session"]
      @session_login_user = session_login_user_params
      if @session_login_user
        payload = {
          user_id: @session_login_user["user_id"],
          session: @session_login_user["session"],
        }
        render :json => payload
      else
        payload = {
          error: "Incorrect Session",
          status: 401
        }
        render :json => payload, :status => 401
      end
    else
      # 見つかったユーザーとパスワードのSHA256ハッシュが一致しているかどうかを見る
      @login_user = login_user_params
      if @login_user["password"] === Digest::SHA256.hexdigest(JSON.parse(params["user"])["password"])
        @session = Session.new(signup_session_params)
        if @session.save
          payload = {
            user_id: @login_user["user_id"],
            session: @session["session"]
          }
          render :json => payload
        else
          payload = {
            error: "Session Creation Failed",
            status: 401
          }
          render :json => payload, :status => 401
        end
      else
        payload = {
          error: "Incorrect Password",
          status: 401
        }
        render :json => payload, :status => 401
      end
    end
  end

  # POST /users
  def create
    @user = User.new(signup_user_params)
    @session = Session.new(signup_session_params)

    if (
      @user.save &&
      @session.save &&
      signup_user_params["user_id"].match?(/\A[0-9a-zA-Z\-_]+\z/) &&
      signup_user_params["email"].match?(/\A([0-9a-zA-Z]([0-9a-zA-Z\-\.])*@([0-9a-zA-Z][0-9a-zA-Z]*\.)+[a-zA-Z]{2,9})\z/) &&
      signup_user_params["password"].match?(/\A[0-9a-zA-Z\-_\/*+.,!#$%&()~|]+\z/)
    )
      payload = {
        user_id: @user["user_id"],
        session: @session["session"]
      }
      render :json => payload, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @session_login_user.destroy
  end

  private
    # user_idが一致するものを見つけてくる
    def login_user_params
      user_params_json = JSON.parse(params["user"])
      user_params = ActionController::Parameters.new({"user" => user_params_json}).require(:user).permit(:user_id, :password)
      @login_user = User.find_by(user_id: user_params[:user_id])
    end

    def session_login_user_params
      user_params_json = JSON.parse(params["user"])
      user_params = ActionController::Parameters.new({"user" => user_params_json}).require(:user).permit(:user_id, :session)
      @session_login_user = Session.find_by(user_id: user_params[:user_id], session: user_params[:session])
    end

    # パスワードはSHA256に変換して保存
    def signup_user_params
      user_params_json = JSON.parse(params["user"])
      user_params_json["password"] = Digest::SHA256.hexdigest(user_params_json["password"])
      return ActionController::Parameters.new({"user" => user_params_json}).require(:user).permit(:user_id, :email, :password)
    end

    def signup_session_params
      user_params_json = JSON.parse(params["user"])
      user_params_json["session"] = SecureRandom.hex(32)
      return ActionController::Parameters.new({"user" => user_params_json}).require(:user).permit(:user_id, :session)
    end
end
