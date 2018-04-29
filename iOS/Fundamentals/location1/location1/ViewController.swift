//
//  ViewController.swift
//  location1
//
//  Created by Robert Gormley on 3/15/18.
//  Copyright © 2018 Robert Gormley. All rights reserved.
//

import UIKit
import CoreLocation
import MapKit


class ViewController: UIViewController, CLLocationManagerDelegate, MKMapViewDelegate {
    @IBOutlet weak var mapView: MKMapView!
    
    @IBOutlet weak var currentLatitudeLabel: UILabel!
    @IBOutlet weak var currentLongitudeLabel: UILabel!
    @IBOutlet weak var horizontalAccuracyLabel: UILabel!
    @IBOutlet weak var currentAltitudeLabel: UILabel!
    @IBOutlet weak var verticalAccuracyLabel: UILabel!
    @IBOutlet weak var distanceLabel: UILabel!
    
    @IBOutlet weak var lowAltitudeLabel: UILabel!
    @IBOutlet weak var highAltitudeLabel: UILabel!
    @IBOutlet weak var changeInAltitude: UILabel!
    @IBOutlet weak var startAltitudeLabel: UILabel!
    @IBOutlet weak var endAltitudeLabel: UILabel!
    
    
    
    var locationManager: CLLocationManager = CLLocationManager()
    var startLocation: CLLocation!
    
    
    @IBAction func resetButton(_ sender: UIButton) {
        startLocation = nil
    }
    
    
    override func viewDidLoad() {
        
        super.viewDidLoad()
        mapView.showsUserLocation = true
        locationManager.desiredAccuracy = kCLLocationAccuracyBest
        locationManager.delegate = self
        mapView.delegate = self
        locationManager.requestWhenInUseAuthorization()
        locationManager.startUpdatingLocation()
        startLocation = nil
        startAltitudeLabel.text = String(arr[0].altitude)
        endAltitudeLabel.text = String(arr[arr.count].altitude)
        lowAltitudeLabel.text = String(lowest())
        highAltitudeLabel.text = String(highest())
        changeInAltitude.text = String(lowest() - highest())
    }
    @IBAction func zoomOut(_ sender: Any) {
//        let userLocation = mapView.userLocation
//
//        let region = MKCoordinateRegionMakeWithDistance(
//            userLocation.location!.coordinate, 2000, 2000)
//
//        mapView.setRegion(region, animated: true)
    }
    
    @IBAction func changeMapType(_ sender: Any) {
        if mapView.mapType == MKMapType.standard {
            mapView.mapType = MKMapType.satellite
        } else {
            mapView.mapType = MKMapType.standard
        }
    }
    
    @IBAction func zoomIn(_ sender: Any) {
        let userLocation = mapView.userLocation
        
        let region = MKCoordinateRegionMakeWithDistance(
            userLocation.location!.coordinate, 2000, 2000)
        
        mapView.setRegion(region, animated: true)
    }
    
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
        let latestLocation: CLLocation = locations[locations.count - 1]
        
        currentLatitudeLabel.text = String(format: "%.4f", latestLocation.coordinate.latitude)
        currentLongitudeLabel.text = String(format: "%.4f", latestLocation.coordinate.longitude)
        horizontalAccuracyLabel.text = String(format: "%.4f", latestLocation.horizontalAccuracy)
        verticalAccuracyLabel.text = String(format: "%.4f", latestLocation.verticalAccuracy)
        currentAltitudeLabel.text = String(format: "%.4f", latestLocation.altitude)
        if startLocation == nil {
            startLocation = latestLocation
        }
        let distanceBetween: CLLocationDistance = latestLocation.distance(from: startLocation)
        
        distanceLabel.text = String(format: "%.2f", distanceBetween)
    }

    let arr:[CLLocation] = []
    
    func lowest() -> Double {
        var lowest = arr[0].altitude
        for i in arr {
            if i.altitude < lowest {
                lowest = i.altitude
            }
        }
        return lowest
    }
    
    func highest() -> Double {
        var highest = arr[0].altitude
        for i in arr {
            if i.altitude > highest {
                highest = i.altitude
            }
        }
        return highest
    }
    
//    var altDict:[String:Double]
//    func highest() {
//        var lowest = arr[0].altitude
//        var highest = arr[0].altitude
//        for i in arr {
//            if i.altitude < lowest {
//                lowest = i.altitude
//            }
//            if i.altitude > highest {
//                highest = i.altitude
//            }
//        }
//        return lowest
//        let change = highest - lowest
//        altDict = ["lowest": lowest, "highest": highest, "change": change]
//    }
    
    
    func mapView(_ mapView: MKMapView, didUpdate
        userLocation: MKUserLocation) {
        mapView.centerCoordinate = userLocation.location!.coordinate
    }


}

