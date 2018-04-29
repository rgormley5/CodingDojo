//
//  addNoteDelegate.swift
//  ToDoList1
//
//  Created by Robert Gormley on 3/18/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

protocol AddNoteDelegate: class {
    func itemSaved(by controller: AddNoteViewController, with itemInputText: String, at indexPath: NSIndexPath?)
}
