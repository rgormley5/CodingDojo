//
//  MissionDetailsTableViewController.swift
//  BL2
//
//  Created by Robert Gormley on 3/18/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class MissionDetailsTableViewController: UITableViewController {
    
    var delegate: CancelButtonDelegate?

    override func viewDidLoad() {
        super.viewDidLoad()

    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    // MARK: - Table view data source

    override func numberOfSections(in tableView: UITableView) -> Int {
        // #warning Incomplete implementation, return the number of sections
        return 0
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        // #warning Incomplete implementation, return the number of rows
        return 0
    }
    
    @IBAction func cancelButtonPressed(_ sender: UIBarButtonItem) {
        delegate?.cancelButtonPressed(byController: self)
    }
    



}
