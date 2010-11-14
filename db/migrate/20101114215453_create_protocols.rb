class CreateProtocols < ActiveRecord::Migration
  def self.up
    create_table :protocols do |t|
      t.string :number
      t.string :attendant_name
      t.datetime :emitted_at
      t.text :description

      t.timestamps
    end
  end

  def self.down
    drop_table :protocols
  end
end
