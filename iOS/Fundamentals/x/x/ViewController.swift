//
//  ViewController.swift
//  x
//
//  Created by Robert Gormley on 3/26/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit
import CoreData

class ViewController: UIViewController {
    
    let headers = ["Favorites", "Quotes"]
    var tableData:[String: [QuoteBank]] =
        [
            "Favorites": [],
            "Quotes": [],
    ]
    
    let appDelegate = (UIApplication.shared.delegate as! AppDelegate)
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    @IBOutlet weak var tableView: UITableView!
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "newItemSegue" {
            let navigationController = segue.destination as! UINavigationController
            let controller = navigationController.topViewController as! OtherViewController
            controller.delegate = self
        }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.dataSource = self
        tableView.delegate = self
        fetchQuotes()
        fetchFavorites()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    func fetchQuotes() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "QuoteBank")
        request.predicate = NSPredicate(format: "favorite == %@", false as CVarArg)
        do {
            let result = try managedObjectContext.fetch(request)
            tableData["Quotes"] = result as! [QuoteBank]
        } catch {
            print("errors are: \(error)")
        }
    }
    
    func fetchFavorites() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "QuoteBank")
        request.predicate = NSPredicate(format: "favorite == %@", true as CVarArg)
        do {
            let result = try managedObjectContext.fetch(request)
            tableData["Favorites"] = result as! [QuoteBank]
        } catch {
            print("errors are: \(error)")
        }
    }

}

extension ViewController: UITableViewDataSource, UITableViewDelegate {
    
    func numberOfSections(in tableView: UITableView) -> Int {
        return headers.count
    }

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        let header = headers[section]
        return tableData[header]!.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        let cell = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)
        let header = headers[indexPath.section]
        cell.textLabel?.text = tableData[header]![indexPath.row].quote
        return cell
    }
    
    func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        return headers[section]
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let header = headers[indexPath.section]
        tableData[header]![indexPath.row].favorite = !tableData[header]![indexPath.row].favorite
        appDelegate.saveContext()
        fetchQuotes()
        fetchFavorites()
        tableView.reloadData()
    }

}

extension ViewController: NewItemDelegate {
    func cancelButtonPressed() {
        dismiss(animated: true, completion: nil)
    }
    
    func itemSaved(by: OtherViewController, itemText: String) {
        let newQuote = NSEntityDescription.insertNewObject(forEntityName: "QuoteBank", into: managedObjectContext) as! QuoteBank
        newQuote.quote = itemText
        newQuote.favorite = false
        appDelegate.saveContext()
        tableView.reloadData()
        dismiss(animated: true, completion: nil)
    }
}



