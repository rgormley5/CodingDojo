//
//  RegistrationVC.swift
//  Travel1
//
//  Created by Robert Gormley on 3/28/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit

class RegistrationVC: UIViewController {

    @IBOutlet weak var emailField: UITextField!
    @IBOutlet weak var passwordField: UITextField!
    @IBOutlet weak var confirmPasswordField: UITextField!
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    @IBAction func registerButtonClicked(_ sender: UIButton) {
        
//        let userEmail = emailField.text
//        let userPassword = passwordField.text
//        let userConfirmPassword = confirmPasswordField.text
        
        // Check for empty fields
//        if (userEmail.isEmpty || userPassword.isEmpty || userConfirmPassword.isEmpty) {
//            displayAlertMessage("All fields are required")
//            return
//        }
        
        // Check if passwords match
//        if (userPassword != userConfirmPassword) {
//            displayAlertMessage("Passwords do not match")
//            return
//        }
        
        
        // Store data
        
        
        // Display alert message with confirmation
        
    }
    
//    func displayAlertMessage(userMessage: String) {
//        var myAlert = UIAlertController(title:"Alert", message: userMessage, preferredStyle: UIAlertControllerStyle.alert)
//        let okAction = UIAlertController(title: "Okay", style: UIAlertActionStyle.default, handler: nil)
//        myAlert.addAction(okAction)
//        self.presentationController(myAlert, animated: true, completion: nil)
//    }
    

}
