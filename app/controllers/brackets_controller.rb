class BracketsController < ApplicationController

	respond_to :json, :html

	def index
		@brackets = Bracket.all
		respond_with @yogurts
	end

end


