// 引入 wasm-bindgen 宏，用于 JS 交互
use wasm_bindgen::prelude::*;

// 暴露给 JS 的函数（无参数/返回值）
#[wasm_bindgen]
pub fn sum_primes(n: u32) -> u32 {
    if n < 2 {
        return 0;
    }
    let mut sum = 0;
    // 遍历 2 到 n，判断每个数是否为质数，若是则累加
    for i in 2..=n {
        if is_prime(i) {
            sum += i;
        }
    }
    sum
}

// 辅助函数：判断一个数是否为质数（内部使用，不暴露给 JS）
fn is_prime(num: u32) -> bool {
    if num <= 1 {
        return false;
    }
    if num == 2 {
        return true;
    }
    if num % 2 == 0 {
        return false;
    }
    // 只需判断到 sqrt(num) 即可（优化性能）
    let sqrt_num = (num as f64).sqrt() as u32;
    for i in (3..=sqrt_num).step_by(2) {
        if num % i == 0 {
            return false;
        }
    }
    true
}