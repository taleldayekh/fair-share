//
//  UserModel.swift
//  FairShare
//
//  Created by Talel Dayekh on 2020-04-03.
//  Copyright © 2020 Talel Dayekh. All rights reserved.
//

import Foundation

class User {
    var id:Int
    var name:String
    var spent:Int
    
    init(id:Int, name:String) {
        self.id = id
        self.name = name
        self.spent = 0
    }
    
    func spend(amount: Int) -> Void {
        self.spent += amount
    }
}
