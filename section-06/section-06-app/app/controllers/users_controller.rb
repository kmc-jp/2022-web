require "json"

class UsersController < ApplicationController
  before_action :login_user_params, only: :index

  # GET /users
  def index
    # 見つかったユーザーとパスワードのSHA256ハッシュが一致しているかどうかを見る
    if @login_user["password"] === Digest::SHA256.hexdigest(JSON.parse(params["user"])["password"])
      payload = {
        user_id: @login_user["user_id"],
      }
      render :json => payload
    else
      payload = {
        error: "Incorrect Password",
        status: 401
      }
      render :json => payload, :status => 401
    end
  end

  # POST /users
  def create
    @user = User.new(signup_user_params)

    if @user.save
      payload = {
        user_id: @user["user_id"],
      }
      render :json => payload, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def logout
    puts "Log out"
  end

  private
    # user_idが一致するものを見つけてくる
    def login_user_params
      user_params_json = JSON.parse(params["user"])
      user_params = ActionController::Parameters.new({"user" => user_params_json}).require(:user).permit(:user_id, :password)
      @login_user = User.find_by(user_id: user_params[:user_id])
    end

    # パスワードはSHA256に変換して保存
    def signup_user_params
      user_params_json = JSON.parse(params["user"])
      user_params_json["password"] = Digest::SHA256.hexdigest(user_params_json["password"])
      return ActionController::Parameters.new({"user" => user_params_json}).require(:user).permit(:user_id, :email, :password)
    end
end
