//
//  NewContactDelegate.swift
//  belt2
//
//  Created by Robert Gormley on 3/27/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import Foundation

protocol NewContactDelegate: class {
    func cancelButton()
    func saveContact(by: NewContactVC, firstName: String, lastName: String, number: String, at indexPath: IndexPath?)
}
