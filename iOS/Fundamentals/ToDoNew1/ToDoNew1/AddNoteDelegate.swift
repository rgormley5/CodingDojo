//
//  AddNoteDelegate.swift
//  ToDoNew1
//
//  Created by Robert Gormley on 3/22/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

protocol AddNoteDelegate: class {
    func itemSaved(by controller: addNoteVC, titleInput: String, descInput: String, dateInput: String, at indexPath: IndexPath)
}
