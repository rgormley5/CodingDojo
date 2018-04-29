//
//  customCellTableViewCell.swift
//  ToDoList1
//
//  Created by Robert Gormley on 3/16/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class customCellTableViewCell: UITableViewCell {
    
    @IBOutlet weak var itemLabel: UILabel!
    @IBOutlet weak var dateLabel: UILabel!
    @IBOutlet weak var notesLabel: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
    }
    
}
