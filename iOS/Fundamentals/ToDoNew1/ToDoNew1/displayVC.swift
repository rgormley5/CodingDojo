//
//  displayVC.swift
//  ToDoNew1
//
//  Created by Robert Gormley on 3/22/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit
import CoreData

class displayVC: UITableViewController {
    
    var objectArray:[String] = []
    
    let appDelegate = (UIApplication.shared.delegate as! AppDelegate)
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    
    @IBAction func plusButtonPressed(_ sender: UIBarButtonItem) {
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        print("loaded")
        tableView.delegate = self
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return objectArray.count
    }

    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "customCellIdentifier", for: indexPath) as! customCell
//        cell.titleLabel.text = objectArray[indexPath.row].
        return cell
    }
    
    @IBAction func unwindSegue(_ sender: UIStoryboardSegue) {
        
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if let vc = segue.destination as? addNoteVC {
            vc.delegate = self
        }
    }
    
}

extension displayVC: AddNoteDelegate {
    func itemSaved(by controller: addNoteVC, titleInput: String, descInput: String, dateInput: String, at indexPath: IndexPath?) {
        if let ip = indexPath {
            let newObject = objectArray[ip.row]
        }
    }
}

