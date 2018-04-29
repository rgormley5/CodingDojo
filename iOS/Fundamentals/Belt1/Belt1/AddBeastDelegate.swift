//
//  AddBeastDelegate.swift
//  Belt1
//
//  Created by Robert Gormley on 3/23/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

protocol AddBeastDelegate: class {
    func itemSaved(by controller: JustBeastItVC, itemText: String, at indexPath: IndexPath?)
    func cancelButtonPressed(by controller: JustBeastItVC)
}


