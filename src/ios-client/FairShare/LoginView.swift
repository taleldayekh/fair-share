//
//  LoginView.swift
//  FairShare
//
//  Created by Talel Dayekh on 2020-04-19.
//  Copyright © 2020 Talel Dayekh. All rights reserved.
//

import SwiftUI
import Foundation

struct UserModel: Codable {
    let data:[String: [String: String]]
}

struct LoginView: View {
    func googleLogin() {
        print("Logging in with Google")
        
        let getUserQuery = """
        {user(id: 1){username}}
        """
        
        let addUserMutation = """
        mutation {addUser(username: "🤪"){username}}
        """
        
        let url = URL(string: "http://localhost:666/api")!
        var request = URLRequest(url: url)

        request.httpMethod = "POST"
        request.httpBody = getUserQuery.data(using: .utf8)
//        request.httpBody = addUserMutation.data(using: .utf8)
        
        let session = URLSession.shared
        let dataTask = session.dataTask(with: request) { (data, response, error) in
            if error == nil && data != nil {
                // Data coming straight from the request
                print(data)
                
                // Data converted from bytes to string
                guard let dataString = String(data: data!, encoding: String.Encoding.utf8) else { return }
                print(dataString)
                
                do {
                    let decoder = JSONDecoder()
                    let user = try decoder.decode(UserModel.self, from: data!)
                    print(user)
                    let retrievedData = user.data
                    print(retrievedData)
                    print(retrievedData["user"])
                    print(retrievedData["user"]!["username"]!)
                } catch {
                    print("Error")
                }
            }
        }
        dataTask.resume()
    }
    
    var body: some View {
        VStack {
            Button(action: {
                self.googleLogin()
            }) {
                Text("Login with Google")
            }
            Button(action: {
                // TODO
            }) {
                Text("Login with Apple")
            }
        }
    }
}

struct LoginView_Previews: PreviewProvider {
    static var previews: some View {
        LoginView()
    }
}
