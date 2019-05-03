class RemoveAddressFromShops < ActiveRecord::Migration[5.2]
  def change
    remove_column :shops, :address, :string
  end
end
