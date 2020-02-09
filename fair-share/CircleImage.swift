//
//  CircleImage.swift
//  fair-share
//
//  Created by Talel Dayekh on 2019-12-19.
//  Copyright © 2019 Talel Dayekh. All rights reserved.
//

import SwiftUI

struct CircleImage: View {
    var body: some View {
        Image("talel").clipShape(Circle())
    }
}

struct CircleImage_Previews: PreviewProvider {
    static var previews: some View {
        CircleImage()
    }
}
