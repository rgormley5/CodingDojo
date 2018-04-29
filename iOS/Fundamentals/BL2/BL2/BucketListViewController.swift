//
//  ViewController.swift
//  BL2
//
//  Created by Robert Gormley on 3/18/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class BucketListViewController: UITableViewController {
    
    var items = ["item1", "item2", "item3"]

    override func viewDidLoad() {
        super.viewDidLoad()
        print("loaded")
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return items.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "myCell", for: indexPath)
        cell.textLabel?.text = items[indexPath.row]
        return cell
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "addNewMissionSegue" {
            let navigationController = segue.destination as! UINavigationController
            let controller = navigationController.topViewController as! MissionDetailsTableViewController
            controller.delegate = self
        }
    }


}

extension BucketListViewController: CancelButtonDelegate {
    func cancelButtonPressed(byController: UIViewController) {
        dismiss(animated: true, completion: nil)
    }
}


