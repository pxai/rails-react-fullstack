class Exercise < ApplicationRecord
	validates :name, presence: true
	validates :description, presence: true
	validates :repeat, presence: true
	validates :calories, presence: true
	validates :duration, presence: true
end
