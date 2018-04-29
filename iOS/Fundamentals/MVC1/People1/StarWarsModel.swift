//
//  StarWarsModel.swift
//  People1
//
//  Created by Robert Gormley on 3/20/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import Foundation

class StarWarsModel {
    static func getAllPeople(completionHandler:@escaping (_ data: Data?, _ response: URLResponse?, _ error: Error?) -> Void) {
        let url = URL(string: "http://swapi.co/api/people/")
        let session = URLSession.shared
        let task = session.dataTask(with: url!, completionHandler: completionHandler)
        task.resume()
    }
}
