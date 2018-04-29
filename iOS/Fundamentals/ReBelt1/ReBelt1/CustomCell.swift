//
//  CustomCell.swift
//  ReBelt1
//
//  Created by Robert Gormley on 3/24/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

protocol CustomCellDelegate: class {
    func buttonPressed(indexPath: IndexPath)
}

class CustomCell: UITableViewCell {
    
    var indexPath: IndexPath?
    var item: BeastList?
    var delegate: CustomCellDelegate?
    
    @IBOutlet weak var beastLabel: UILabel!
    
    override func awakeFromNib() {
        super.awakeFromNib()
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

    }
    
    @IBAction func beastButtonPressed(_ sender: UIButton) {
        delegate?.buttonPressed(indexPath: indexPath!)
    }

}
