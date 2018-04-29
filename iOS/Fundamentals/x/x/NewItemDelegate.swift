//
//  newItemDelegate.swift
//  x
//
//  Created by Robert Gormley on 3/26/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import Foundation

protocol NewItemDelegate: class {
    func cancelButtonPressed()
    func itemSaved(by: OtherViewController, itemText: String)
}
