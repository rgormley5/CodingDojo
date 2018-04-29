//
//  customCell.swift
//  ToDoNew1
//
//  Created by Robert Gormley on 3/22/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class customCell: UITableViewCell {

    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var dateLabel: UILabel!
    @IBOutlet weak var descLabel: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
    }
    
    

}
