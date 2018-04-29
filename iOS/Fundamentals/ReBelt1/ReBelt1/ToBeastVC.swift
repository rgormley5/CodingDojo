//
//  ViewController.swift
//  ReBelt1
//
//  Created by Robert Gormley on 3/24/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit
import CoreData

class ToBeastVC: UITableViewController {
    
    var arr:[BeastList] = []
    
    let appDelegate = (UIApplication.shared.delegate as! AppDelegate)
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext

    override func viewDidLoad() {
        super.viewDidLoad()
        print("loaded ToBeastVC")
//        tableView.reloadData()
        fetchFalseItems()
    }
    
    func fetchFalseItems() {
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
    
    @IBAction func newButtonClicked(_ sender: UIBarButtonItem) {
    }
    
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return arr.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "CustomCell", for: indexPath) as! CustomCell
//        print("cell is: \(cell)")
//        print("cell.beastLabel is: \(cell.beastLabel)")
//        print("cell.beastLabel.text is: \(cell.beastLabel.text)")
//        print("arr is: \(arr)")
//        print("indexPath is: \(indexPath)")
//        print("arr[indexPath.row] is: \(arr[indexPath.row])")
//        print("arr[indexPath.row].title is: \(arr[indexPath.row].title)")
        cell.beastLabel.text = arr[indexPath.row].title
        cell.delegate = self
        cell.indexPath = indexPath
        return cell
    }
    
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        print("in prepare")
        if segue.identifier == "newBeastSegue" {
            let navigationController = segue.destination as! UINavigationController
            let controller = navigationController.topViewController as! JustBeastItVC
            controller.delegate = self
            
            if let ip = sender as? IndexPath {
                let editText = arr[ip.row]
                controller.item = editText.title
                controller.indexPath = ip
            }
            
        }
    }
    
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        performSegue(withIdentifier: "newBeastSegue", sender: indexPath)
    }

}

extension ToBeastVC: NewBeastDelegate {
    func cancelButton() {
        dismiss(animated: true, completion: nil)
    }
    
    func itemSaved(by: JustBeastItVC, itemText: String, at indexPath: IndexPath?) {
        print("in item saved")
        if let ip = indexPath {
            let newObject = arr[ip.row]
            
            newObject.title = itemText
            newObject.clicked = false

        } else {
            let newObject = NSEntityDescription.insertNewObject(forEntityName: "BeastList", into: managedObjectContext) as! BeastList
            newObject.title = itemText
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
        arr[indexPath.row].clicked = true
        arr[indexPath.row].date = Date()
        appDelegate.saveContext()
        fetchFalseItems()
        tableView.reloadData()
    }
}

