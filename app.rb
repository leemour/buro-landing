require 'rubygems'
require 'sinatra/base'
require 'slim'
class MyApp < Sinatra::Base

  get '/' do
    slim :test
  end

end