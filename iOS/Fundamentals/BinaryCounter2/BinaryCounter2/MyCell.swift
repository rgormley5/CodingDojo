//
//  MyCell.swift
//  BinaryCounter2
//
//  Created by Robert Gormley on 3/15/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

protocol MyCellDelegate: UITableViewDelegate {
    func addValue(value: Int)
}

class MyCell: UITableViewCell {
    
    var delegate: MyCellDelegate?
    
    @IBOutlet weak var cellLabel: UILabel!
    @IBOutlet weak var plusButton: UIButton!
    @IBOutlet weak var minusButton: UIButton!

    @IBAction func addButtonPressed(_ sender: UIButton) {
        let val = Int(cellLabel.text!)!
        delegate!.addValue(value: val)
    }
    
    @IBAction func minusButtonPressed(_ sender: UIButton) {
        let val = Int(cellLabel.text!)!
        delegate!.addValue(value: -1 * val)
    }
    
    override func awakeFromNib() {
        super.awakeFromNib()
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
    }

}
