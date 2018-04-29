//
//  ViewController.swift
//  ToDoList1
//
//  Created by Robert Gormley on 3/16/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class AddNoteViewController: UIViewController {
    @IBOutlet weak var itemInput: UITextField!
    @IBOutlet weak var notesInput: UITextField!
    @IBOutlet weak var datePicker: UIDatePicker!
    @IBOutlet weak var addButton: UIButton!
    
    var delegate: AddNoteDelegate?
    
    var indexPath: NSIndexPath?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        addButton.titleLabel?.font = UIFont.boldSystemFont(ofSize: 26)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    

    @IBAction func addButtonPressed(_ sender: UIButton) {
        print("add button pressed")
        let itemInputText = itemInput.text!
        let datePickerInput = datePicker.date
        let notesInputText = notesInput.text!
//        print("itemInputText is: \(itemInputText)")
//        print("delegate is: \(delegate)")
        delegate?.itemSaved(by: self, itemInputText: itemInputText, datePickerInput: datePickerInput, notesInputText: notesInputText, at: indexPath)
    }

}

