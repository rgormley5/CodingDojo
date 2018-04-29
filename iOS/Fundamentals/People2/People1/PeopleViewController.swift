//
//  PeopleViewController.swift
//  People1
//
//  Created by Robert Gormley on 3/19/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class PeopleViewController: UITableViewController {
    
    var people:[String] = []

    override func viewDidLoad() {
        super.viewDidLoad()
        print("loaded")
        
        let url = URL(string: "http://swapi.co/api/people/")
        let session = URLSession.shared
        let task = session.dataTask(with: url!, completionHandler:{
            data, response, error in
            print("in here")
            print(data ?? "no data")
            do {
                if let jsonResult = try JSONSerialization.jsonObject(with: data!, options: JSONSerialization.ReadingOptions.mutableContainers) as? NSDictionary {
                    print(jsonResult)
                    if let results = jsonResult["results"] {
                        let resultsArray = results as! NSArray
//                        print("resultsArray.count is: \(resultsArray.count)")
//                        print("resultsArray[0] is: \(resultsArray[0])")
//                        print("resultsArray.firstObject is: \(resultsArray.firstObject)")
                        for person in resultsArray {
                            let thisName = person as! NSDictionary
                            if let name = thisName["name"] as? String {
                                self.people.append(name)
                            }
                        }
                        self.tableView.reloadData()
                    }
                }
            } catch {
                print(error)
            }
        })
        task.resume()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return people.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = UITableViewCell()
        cell.textLabel?.text = people[indexPath.row]
        return cell
    }


}

