class RemovePlaceIdFromShops < ActiveRecord::Migration[5.2]
  def change
    remove_column :shops, :place_id
  end
end
