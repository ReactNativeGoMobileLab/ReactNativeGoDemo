//
//  GobindDemo.m
//  ReactNativeGoProject
//
//  Created by jia on 2017/7/6.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "GobindDemo.h"
#import "Gobinddemo/Gobinddemo.h"
#import <React/RCTLog.h>

@implementation GobindDemo

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(sum:(int)a b: (int)b callback: (RCTResponseSenderBlock)callback) {
  long sum = GobinddemoSum(a, b);
  callback(@[[NSNull null], [NSNumber numberWithLong:(sum)]]);
}

RCT_EXPORT_METHOD(fibonacci:(int)n callback: (RCTResponseSenderBlock)callback) {
  long fib = GobinddemoFibonacci(n);
  callback(@[[NSNull null], [NSNumber numberWithLong:(fib)]]);
}



@end
