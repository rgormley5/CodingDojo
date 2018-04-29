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
    
    
    var arr = ["One", "Two", "Three"]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        print("loaded")
        tableView.dataSource = self
//        tableView.delegate = self
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
    
    @IBAction func writeNewNotePressed(_ sender: UIBarButtonItem) {
        
    }
    
    @IBAction func unwindSegue (_ sender: UIStoryboardSegue) {
    }
}

extension DisplayViewController: UITableViewDataSource {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return arr.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "customCell", for: indexPath) as! customCellTableViewCell
        cell.itemLabel?.text = arr[indexPath.row]
        cell.dateLabel?.text = arr[indexPath.row]
        cell.notesLabel?.text = arr[indexPath.row]
        return cell
    }
}

extension DisplayViewController: AddNoteDelegate {
    func itemSaved(by controller: AddNoteViewController, with itemInputText: String, at indexPath: NSIndexPath?) {
        print("in here")
        print("text received is: \(itemInputText)")
        if let ip = indexPath {
            arr[ip.row] = itemInputText
        } else {
            arr.append(itemInputText)
        }
        tableView.reloadData()
    }
}
