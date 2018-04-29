//
//  BeastedVC.swift
//  ReBelt1
//
//  Created by Robert Gormley on 3/24/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit
import CoreData

class BeastedVC: UITableViewController {
    
    var arr:[BeastList] = []
    
    let appDelegate = (UIApplication.shared.delegate as! AppDelegate)
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    override func viewDidLoad() {
        super.viewDidLoad()
        print("BeastedVC loaded")
        fetchTrueItems()
        tableView.reloadData()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {

        return arr.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "BeastedCells", for: indexPath)
        let item = arr[indexPath.row]
        
        let dateformatter = DateFormatter()
        dateformatter.dateStyle = .medium
        dateformatter.timeStyle = .none
        
        cell.detailTextLabel?.text = dateformatter.string(from: item.date!)
        cell.textLabel?.text = arr[indexPath.row].title
        
        return cell
    }
    
    func fetchTrueItems() {
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "BeastList")
        request.predicate = NSPredicate(format: "clicked == %@", true as CVarArg)
        do {
            let result = try managedObjectContext.fetch(request)
            arr = result as! [BeastList]
        } catch {
            print("errors are: \(error)")
        }
    }


}
