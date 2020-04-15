//
//  ContentView.swift
//  FairShare
//
//  Created by Talel Dayekh on 2020-04-03.
//  Copyright © 2020 Talel Dayekh. All rights reserved.
//

import SwiftUI

struct ContentView: View {
    var bianca = User(id: 1, name: "Bianca")
    var talel = User(id: 2, name: "Talel")
    
    @State private var biancaTotalSpent:Int = 0
    @State private var talelTotalSpent:Int = 0
    
    @State private var fairShareForBianca:Int = 0
    @State private var fairShareForTalel:Int = 0
    
    func fairShareAlgorithm(talelSpendings:Int, biancaSpendings:Int) {
        fairShareForBianca = 0
        fairShareForTalel = 0
        
        let biancaOwnsTalel:Int = talelSpendings / 2
        let talelOwnsBianca:Int = biancaSpendings / 2
        
        let talelFairShare = biancaOwnsTalel - talelOwnsBianca
        let biancaFairShare = talelOwnsBianca - biancaOwnsTalel
        
        let talelNewFairShare = fairShareForTalel + talelFairShare
        let biancaNewFairShare = fairShareForBianca + biancaFairShare
        fairShareForTalel = talelNewFairShare
        fairShareForBianca = biancaNewFairShare
    }
    
    var body: some View {
        VStack {
            Button(action: {
                self.bianca.spend(amount: 70)
                self.biancaTotalSpent = self.bianca.spent
                self.fairShareAlgorithm(talelSpendings: self.talelTotalSpent, biancaSpendings: self.biancaTotalSpent)
                print(self.bianca.spent)
            }) {
                Text("Spend")
            }
            VStack {
                Text(bianca.name)
                Text("Spent: " + String(biancaTotalSpent))
                Text("Fair share: " + String(self.fairShareForBianca))
            }
            Spacer()
            Text("Total spent: " + String(biancaTotalSpent + talelTotalSpent))
            Spacer()
            VStack {
                Text("Fair share: " + String(self.fairShareForTalel))
                Text("Spent: " + String(talelTotalSpent))
                Text(talel.name)
            }
            Button(action: {
                self.talel.spend(amount: 10)
                self.talelTotalSpent = self.talel.spent
                self.fairShareAlgorithm(talelSpendings: self.talelTotalSpent, biancaSpendings: self.biancaTotalSpent)
                print(self.talel.spent)
            }) {
                Text("Spend")
            }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
