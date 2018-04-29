//
//  NewContactVC.swift
//  belt2
//
//  Created by Robert Gormley on 3/27/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit
import CoreData

class NewContactVC: UIViewController {
    
    var delegate: ContactListVC?
    var indexPath: IndexPath?
    var fname: String?
    var lname: String?
    var num: String?
    
    @IBOutlet weak var firstNameInput: UITextField!
    @IBOutlet weak var lastNameInput: UITextField!
    @IBOutlet weak var numberInput: UITextField!
    
    
    let appDelegate = (UIApplication.shared.delegate as! AppDelegate)
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext

    override func viewDidLoad() {
        super.viewDidLoad()
        print("loaded NewContactVC")
        self.title = "New/Edit Contact"
        firstNameInput.text = fname
        lastNameInput.text = lname
        numberInput.text = num
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    @IBAction func cancelButtonPressed(_ sender: UIBarButtonItem) {
        delegate?.cancelButton()
    }
    
    @IBAction func saveButtonPressed(_ sender: UIBarButtonItem) {
        let firstName = firstNameInput.text!
        let lastName = lastNameInput.text!
        let number = numberInput.text!
        delegate?.saveContact(by: self, firstName: firstName, lastName: lastName, number: number, at: indexPath)
    }
    
    

}
