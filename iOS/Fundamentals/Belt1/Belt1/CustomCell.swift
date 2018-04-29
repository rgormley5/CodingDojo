//
//  TableViewCell.swift
//  Belt1
//
//  Created by Robert Gormley on 3/23/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

protocol CustomCellDelegate: class {
    func buttonPressed(indexPath: IndexPath)
}

class CustomCell: UITableViewCell {
    
    var delegate: CustomCellDelegate?
    var item: BeastList?
    var indexPath: IndexPath?
    
    @IBOutlet weak var itemText: UILabel!
    
    @IBAction func beastButtonPressed(_ sender: UIButton) {
        delegate?.buttonPressed(indexPath: indexPath!)
        print("in delegate: \(delegate)")
    }

    override func awakeFromNib() {
        super.awakeFromNib()
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
    }

}
