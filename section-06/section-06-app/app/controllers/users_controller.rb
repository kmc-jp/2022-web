require "json"

class UsersController < ApplicationController
  before_action :login_user_params, only: :index
  # before_action :set_user, only: %i[ show update destroy ]

  # GET /users
  def index
    # @users = User.all

    # render json: @users
    
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

  # GET /users/1
  # def show
  #   render json: @login_user
  # end

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

  # PATCH/PUT /users/1
  # def update
  #   if @user.update(user_params)
  #     render json: @user
  #   else
  #     render json: @user.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /users/1
  # def destroy
  #   @user.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_user
    #   @user = User.find_by(user_id: params[:id])
    # end

    def login_user_params
      user_params_json = JSON.parse(params["user"])
      user_params_json["password"] = Digest::SHA256.hexdigest(user_params_json["password"])
      user_params = ActionController::Parameters.new({"user" => user_params_json}).require(:user).permit(:user_id, :password)
      @login_user = User.find_by(user_id: user_params[:user_id])
    end

    # Only allow a list of trusted parameters through.
    def signup_user_params
      user_params_json = JSON.parse(params["user"])
      user_params_json["password"] = Digest::SHA256.hexdigest(user_params_json["password"])
      return ActionController::Parameters.new({"user" => user_params_json}).require(:user).permit(:user_id, :email, :password)
    end
end
