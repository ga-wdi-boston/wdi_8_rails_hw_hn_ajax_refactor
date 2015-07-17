class AddStoryFkToComment < ActiveRecord::Migration
  def up
    add_column :comments, :story_id, :integer
  end

  def down
    remove_column :comments, :story_id
  end
end
