//
//  newBeastDelegate.swift
//  ReBelt1
//
//  Created by Robert Gormley on 3/24/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import Foundation

protocol NewBeastDelegate: class {
    func cancelButton()
    func itemSaved(by: JustBeastItVC, itemText: String, at indexPath: IndexPath?)
}
