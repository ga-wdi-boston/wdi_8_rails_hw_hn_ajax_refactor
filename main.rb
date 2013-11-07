require 'sinatra'
require 'sinatra/reloader' if development?
require 'pg'
require 'pry'
require 'sinatra/activerecord'
require 'data_mapper'

set :server, 'webrick'
set :public, 'public'
enable :static

set :database, {adapter: 'postgresql'}
DataMapper.setup(:default, (ENV["DATABASE_URL"]))

class Story < ActiveRecord::Base
  has_many :comments
end

class Comment < ActiveRecord::Base
  belongs_to :story
end

get '/' do
  redirect 'index.html'
end

get '/stories.json' do
  Story.all.to_json
end

post '/submit' do
  Story.create(title: params[:title], link: params[:link], body: params[:body]).to_json
  redirect 'index.html'
end

post '/upvote/:id' do
  Story.increment_counter(:up_votes, params[:id])
end

post '/delete/:id' do
  Story.find(params[:id]).delete
end

# get '/post/:id/comments.json' do
#   Story.find(params[:id]).comments.to_json
# end

# post '/create' do
#   Story.create(title: params[:title], link: params[:link], body: params[:body], up_votes: 0, down_votes: 0)
#   redirect '/'
# end

# #Comment page
# get '/item/:id' do
#   @story = Story.find(params[:id])
#   erb :comment
# end

# get '/:id/delete' do
#   Story.delete(params[:id])
#   redirect '/'
# end

# get '/:id/edit' do
#   @story = Story.find(params[:id])
#   erb :edit
# end

# post '/:id/update' do
#   Story.update(params[:id], title: params[:title], link: params[:link], body: params[:body])
#   redirect '/'
# end

# #upvote comment
# get '/upvote/:id/comment/:comment_id' do
#   Comment.increment_counter(:comment_upvotes, params[:comment_id])
#   redirect "/item/#{params[:id]}"
# end

# post '/:id/create_comment' do
#   Story.find(params[:id]).comments.create(body: params[:body], story_id: params[:body])
#   redirect "/item/#{params[:id]}"
# end