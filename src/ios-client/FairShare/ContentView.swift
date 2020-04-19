//
//  ContentView.swift
//  FairShare
//
//  Created by Talel Dayekh on 2020-04-03.
//  Copyright © 2020 Talel Dayekh. All rights reserved.
//

import SwiftUI
import GoogleSignIn

struct ContentView: View {
    var body: some View {
        HStack {
            LoginView()
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
