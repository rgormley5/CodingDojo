//
//  otherViewController.swift
//  MadLibs2
//
//  Created by Robert Gormley on 3/14/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class otherViewController: UIViewController {
    var name:String?

    @IBOutlet weak var adjectiveButton: UITextField!
    @IBOutlet weak var verbOneButton: UITextField!
    @IBOutlet weak var verbTwoButton: UITextField!
    @IBOutlet weak var nounButton: UITextField!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }

   
    
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let viewController = segue.destination as! ViewController
        let data = ["adjective": adjectiveButton.text!, "verbOne": verbOneButton.text!, "verbTwo": verbTwoButton.text!, "noun": nounButton.text!]
        viewController.output = "We are having a perfectly \(data["adjective"]!) time now.  Later we will \(data["verbOne"]!) and \(data["verbTwo"]!) in the \(data["noun"]!)."
        
    }
    
    @IBAction func submitButtonPressed(_ sender: UIButton) {
        performSegue(withIdentifier: "unwindSegue", sender: sender)
    }
    
}
