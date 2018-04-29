//
//  addNoteVC.swift
//  ToDoNew1
//
//  Created by Robert Gormley on 3/22/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit
import CoreData

class addNoteVC: UIViewController {
    
    var delegate: AddNoteDelegate?
    var indexPath: IndexPath?

    @IBOutlet weak var titleInput: UITextField!
    @IBOutlet weak var descInput: UITextField!
    @IBOutlet weak var dateInput: UIDatePicker!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.title = "Add a New Note"

    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    @IBAction func addNoteButtonPressed(_ sender: UIButton) {
        let newtitleInput = titleInput.text!
        let newDescInput = descInput.text!
        let newDateInput = String(describing: dateInput.date)
        delegate?.itemSaved(by: self, titleInput: newtitleInput, descInput: newDescInput, dateInput: newDateInput, at: indexPath!)
    }
    

}
