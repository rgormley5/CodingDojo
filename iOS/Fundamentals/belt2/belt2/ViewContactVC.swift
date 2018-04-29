//
//  ViewContactVC.swift
//  belt2
//
//  Created by Robert Gormley on 3/27/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit
import CoreData

class ViewContactVC: UIViewController {
    
    var delegate: ContactListVC?
    var firstName: String?
    var lastName: String?
    var num: String?
    
    @IBOutlet weak var nameLabel: UILabel!
    @IBOutlet weak var numberLabel: UILabel!
    
    
    let appDelegate = (UIApplication.shared.delegate as! AppDelegate)
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext

    override func viewDidLoad() {
        super.viewDidLoad()
        print("loaded ViewContactVC")
        self.title = "View Contact"
        print("firstName is: \(firstName)")
        print("lastName is: \(lastName)")
        nameLabel.text = String(firstName! + " " + lastName!)
        numberLabel.text = num
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    @IBAction func doneButtonPressed(_ sender: UIBarButtonItem) {
        delegate?.doneButtonTapped()
    }
    


}
