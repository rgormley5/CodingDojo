//
//  ViewController.swift
//  Belt1
//
//  Created by Robert Gormley on 3/23/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit
import CoreData

class ToBeastVC: UITableViewController {
    
    var arr:[BeastList] = []
    
    let appDelegate = (UIApplication.shared.delegate as! AppDelegate)
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext

    @IBAction func beastButtonPressed(_ sender: UIButton) {
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        print("loaded ToBeastVC")
        fetchAllItem()
        self.title = "To Beast"
        
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        print("in prepare")
        
        if segue.identifier == "newItemSegue" {
            let navigationController = segue.destination as! UINavigationController
            let controller = navigationController.topViewController as! JustBeastItVC
            controller.delegate = self
            
            if let ip = sender as? IndexPath {
                let editText = arr[ip.row]
                controller.item = editText.text
                controller.indexPath = ip
            }
        }
        
    }
    
    func fetchAllItem() {
        
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "BeastList")
        request.predicate = NSPredicate(format: "clicked == %@", false as CVarArg)
        do {
            let result = try managedObjectContext.fetch(request)
            arr = result as! [BeastList]
        } catch {
            print("errors are: \(error)")
        }
        
    }
    

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return arr.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "customCell", for: indexPath) as! CustomCell
        cell.itemText.text = arr[indexPath.row].text
        cell.delegate = self
        cell.indexPath = indexPath
        return cell
    }
    
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        print("selected: \(arr[indexPath.row].text)")
        performSegue(withIdentifier: "newItemSegue", sender: indexPath)
    }
    
    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCellEditingStyle, forRowAt indexPath: IndexPath) {
        arr.remove(at: indexPath.row)
        tableView.reloadData()
    }
    
    override func tableView(_ tableView: UITableView, editActionsForRowAt indexPath: IndexPath) -> [UITableViewRowAction]? {
        let delete = UITableViewRowAction(style: .destructive, title: "Delete") { (action, indexPath) in
            // delete item at indexPath
            var item = self.arr.remove(at: indexPath.row)
            self.managedObjectContext.delete(item)
            tableView.reloadData()
            self.appDelegate.saveContext()
        }
        return [delete]
    }
    
    
//    @IBAction func unwindSegue(_ sender: UIStoryboardSegue) {
//
//    }

}

extension ToBeastVC: AddBeastDelegate {
    
    func cancelButtonPressed(by controller: JustBeastItVC) {
        dismiss(animated: true, completion: nil)
    }
    
    func itemSaved(by controller: JustBeastItVC, itemText: String, at indexPath: IndexPath?) {
        if let ip = indexPath {
            print("***** in item saved >> edit item")
            let newObject = arr[ip.row]

            newObject.text = itemText
            newObject.clicked = false

        } else {
            print("***** in item saved >> add new item")
            let newObject = NSEntityDescription.insertNewObject(forEntityName: "BeastList", into: managedObjectContext) as! BeastList
            newObject.text = itemText
            newObject.clicked = false
            arr.append(newObject)
        }
        appDelegate.saveContext()
        tableView.reloadData()
        dismiss(animated: true, completion: nil)
    }
}

extension ToBeastVC: CustomCellDelegate {
    func buttonPressed(indexPath: IndexPath) {
        print("beast button pressed")
        arr[indexPath.row].clicked = true
        arr[indexPath.row].date = Date()
        appDelegate.saveContext()
        fetchAllItem()
        tableView.reloadData()
    }
}



