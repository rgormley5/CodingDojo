//
//  displayViewController.swift
//  ToDoList1
//
//  Created by Robert Gormley on 3/16/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit
import CoreData

class DisplayViewController: UIViewController {
    
    @IBOutlet weak var tableView: UITableView!
    @IBOutlet weak var addNewNote: UIBarButtonItem!
    
    let appDelegate = (UIApplication.shared.delegate as! AppDelegate)
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    var noteArr:[NewListItem] = []
    
    override func viewDidLoad() {
        super.viewDidLoad()
        print("loaded")
        fetchAllItems()
        tableView.dataSource = self
        tableView.delegate = self
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // set delegate
        if let vc = segue.destination as? AddNoteViewController {
            vc.delegate = self
        }
    }
    
    func fetchAllItems() {
        
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "NewListItem")
        do {
            let result = try managedObjectContext.fetch(request)
            noteArr = result as! [NewListItem]
        } catch {
            print("errors are: \(error)")
        }
        
    }
    
    @IBAction func writeNewNotePressed(_ sender: UIBarButtonItem) {
        
    }
    
    @IBAction func unwindSegue (_ sender: UIStoryboardSegue) {
    }
    
}

extension DisplayViewController: UITableViewDataSource, UITableViewDelegate {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return noteArr.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "customCell", for: indexPath) as! customCellTableViewCell
        cell.itemLabel?.text = noteArr[indexPath.row].title!
        cell.dateLabel?.text = noteArr[indexPath.row].date!
        cell.notesLabel?.text = noteArr[indexPath.row].desc!
        return cell
    }

    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        print("HERE jhfgdfhjkl;;oiuytfrdfsghuijkl;'oiu76y5erazdxfcgvbnkpo0897867t6r")
        let cell = tableView.cellForRow(at: indexPath) as! customCellTableViewCell
        if cell.accessoryType == .checkmark {
            cell.accessoryType = .none
        } else {
            cell.accessoryType = .checkmark
        }
        
    }
    
//
//
//    func tableView(_ tableView: UITableView, editActionsForRowAt indexPath: IndexPath) -> [UITableViewRowAction]? {
//        let delete = UITableViewRowAction(style: .destructive, title: "Delete") { (action, indexPath) in
//            // delete item at indexPath
//        }
//
//        let share = UITableViewRowAction(style: .normal, title: "Disable") { (action, indexPath) in
//            // share item at indexPath
//        }
//
//        share.backgroundColor = UIColor.blue
//
//        return [delete, share]
//    }


}

extension DisplayViewController: AddNoteDelegate {
    func itemSaved(by controller: AddNoteViewController, itemInputText: String, datePickerInput: String, notesInputText: String, at indexPath: NSIndexPath?) {
        if let ip = indexPath {
            let newObject = noteArr[ip.row]
            
            newObject.title = itemInputText
            newObject.date = datePickerInput
            newObject.desc = notesInputText
        } else {
            
            let newObject = NSEntityDescription.insertNewObject(forEntityName: "NewListItem", into: managedObjectContext) as! NewListItem
            newObject.title = itemInputText
            newObject.date = datePickerInput
            newObject.desc = notesInputText
            noteArr.append(newObject)
        }
        appDelegate.saveContext()
        
        tableView.reloadData()
    }
    
}
