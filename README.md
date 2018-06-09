# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

```bash
sudo -u postgres createuser <username>
sudo -u postgres createdb <dbname_dev>
sudo -u postgres createdb <dbname_test>

sudo -u postgres psql
psql=# alter user <username> with encrypted password '<password>';
psql=# grant all privileges on database <dbname> to <username> ;
```

With SQL:

```
CREATE DATABASE yourdbname;
CREATE USER youruser IDENTIFIED BY ENCRYPTED PASSWORD 'yourpass';
GRANT ALL PRIVILEGES ON DATABASE yourdbname TO youruser;
GRANT ALL PRIVILEGES ON DATABASE yourdbname_test TO youruser;
```

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
## The console
The allmighty rails console:

```bash
rails console
```

## Rails Generators

Generate controller

```bash
rails generate controller home
```

Generate model

```bash
rails generate model Exercise name:string description:string icon:string repeat:integer calories:float
```
Don't forget to:

```bash
rails db:migrate
rails db:migrate RAILS_ENV=test
```

To scaffold model/controller/view

```bash
rails generate scaffold HighScore game:string score:integer
```

## Migrations
Database migrations start with:

```bash
rails generate migration AddDurationToExercise
```

The code could look like:

```ruby
class AddDurationToExercise < ActiveRecord::Migration[5.1]
  def change
    	add_column :exercises, :duration, :float
		add_index: :exercises, :name
		# remove_column
  end
end
```

