//
//  ViewController.swift
//  belt2
//
//  Created by Robert Gormley on 3/27/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit
import CoreData

class ContactListVC: UIViewController {

    var list:[ContactList] = []
    var myView: ViewContactVC?
    
    @IBOutlet weak var tableView: UITableView!
    
    let appDelegate = (UIApplication.shared.delegate as! AppDelegate)
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    override func viewDidLoad() {
        super.viewDidLoad()
        print("loaded ContactListVC")
        self.title = "Contact List"
        tableView.dataSource = self
        tableView.delegate = self
        fetchAllContacts()
    }
    

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    func fetchAllContacts() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "ContactList")
        do {
            let result = try managedObjectContext.fetch(request)
            list = result as! [ContactList]
        } catch {
            print(error)
        }
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "AddContactSegue" {
            let navigationController = segue.destination as! UINavigationController
            let controller = navigationController.topViewController as! NewContactVC
            controller.delegate = self
            
            if let ip = sender as? IndexPath {
                let editContact = list[ip.row]
                controller.fname = editContact.firstName
                controller.lname = editContact.lastName
                controller.num = editContact.number
                controller.indexPath = ip
            }
        }
        if segue.identifier == "viewSegue" {
            print("in viewSegue")
            let navigationController = segue.destination as! UINavigationController
            let controller = navigationController.topViewController as! ViewContactVC
            controller.delegate = self
            print("controller is: \(controller)")
            print("controller.delegate is: \(controller.delegate)")
            
            if let ip = sender as? IndexPath {
                let contactInfo = list[ip.row]
                print("contactInfo is: \(contactInfo)")
                controller.firstName = contactInfo.firstName
                controller.lastName = contactInfo.lastName
                controller.num = contactInfo.number
            }
        }
    }

}

extension ContactListVC: UITableViewDataSource, UITableViewDelegate {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return list.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)
        cell.textLabel?.text = String(list[indexPath.row].firstName! + " " + list[indexPath.row].lastName!)
        cell.detailTextLabel?.text = list[indexPath.row].number
        return cell
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let optionMenu = UIAlertController(title: nil, message: "Choose Option", preferredStyle: .actionSheet)
//        let saveAction = UIAlertAction(title: "Save", style: .default, handler: {
//            (alert: UIAlertAction!) -> Void in
//            print("File Saved")
//        })
        let viewAction = UIAlertAction(title: "View", style: .default, handler: {
            (alert: UIAlertAction!) -> Void in
            print("View")
//            let navigationController = UINavigationController()
//            let controller = navigationController.topViewController as! ViewContactVC
//            self.present(controller, animated: true)
            self.performSegue(withIdentifier: "viewSegue", sender: indexPath)
        })
        let editAction = UIAlertAction(title: "Edit", style: .default, handler: {
            (alert: UIAlertAction!) -> Void in
            print("Edit")
            self.performSegue(withIdentifier: "AddContactSegue", sender: indexPath)
        })
        let deleteAction = UIAlertAction(title: "Delete", style: .default, handler: {
            (alert: UIAlertAction!) -> Void in
            print("Delete")
            let item = self.list.remove(at: indexPath.row)
            self.managedObjectContext.delete(item)
            tableView.reloadData()
            self.appDelegate.saveContext()
        })
        let cancelAction = UIAlertAction(title: "Cancel", style: .cancel, handler: {
            (alert: UIAlertAction!) -> Void in
            print("Cancelled")
        })
        optionMenu.addAction(viewAction)
        optionMenu.addAction(editAction)
        optionMenu.addAction(deleteAction)
        optionMenu.addAction(cancelAction)
        self.present(optionMenu, animated: true, completion: nil)
    }
    
}

extension ContactListVC: NewContactDelegate {
    func cancelButton() {
        dismiss(animated: true, completion: nil)
    }
    
    func saveContact(by: NewContactVC, firstName: String, lastName: String, number: String, at indexPath: IndexPath?) {
        if let ip = indexPath {
            let editContact = list[ip.row]
            editContact.firstName = firstName
            editContact.lastName = lastName
            editContact.number = number
        } else {
            let newContact = NSEntityDescription.insertNewObject(forEntityName: "ContactList", into: managedObjectContext) as! ContactList
            newContact.firstName = firstName
            newContact.lastName = lastName
            newContact.number = number
            list.append(newContact)
        }
        appDelegate.saveContext()
        tableView.reloadData()
        dismiss(animated: true, completion: nil)
    }
}

extension ContactListVC: ViewContactDelegate {
    func doneButtonTapped() {
        dismiss(animated: true, completion: nil)
    }
}

