//
//  ViewController.swift
//  AgingPeople
//
//  Created by Robert Gormley on 3/12/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    var people = ["Mario1", "Luigi1", "Wario1", "Peach1", "Boo1", "Toad1","Mario2", "Luigi2", "Wario2", "Peach2", "Boo2", "Toad2"]

    @IBOutlet weak var tableView: UITableView!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        tableView.dataSource = self
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }


}

extension ViewController: UITableViewDataSource {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return people.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "MyCell", for: indexPath)
        cell.textLabel?.text = people[indexPath.row]
        cell.detailTextLabel?.text = "\(Int(arc4random_uniform(95) + 1)) years old"
        return cell
    }
}

