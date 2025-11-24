# TypeScript: Type, Interface & Enum

এই প্রোজেক্টে TypeScript-এর কিছু মৌলিক ধারণা ব্যাখ্যা করা হয়েছে, যেমন **Type**, **Interface**, এবং **Enum**।

---

## ১. Type vs Interface

টাইপ এবং ইন্টারফেস উভয়ই অবজেক্টের স্ট্রাকচার নির্ধারণ করে দেয় তবে এদের মধ্যে কিছু পার্থক্য রয়েছে:

- টাইপ ডিফাইন করতে `=` ব্যবহার করতে হয়, কিন্তু ইন্টারফেসে তার প্রয়োজন নেই।  
- ইন্টারফেস সহজেই এক্সটেন্ড করা যায় (`extends`)।  
- একই নামে ইন্টারফেস declare করলে ইন্টারফেস মার্জ করা যায় (Declaration Merging), যা টাইপে সম্ভব নয়।  
- টাইপের তুলনায় ইন্টারফেসের ফ্লেক্সিবিলিটি কম।  

---

## ২. Enum

**Enum** হলো অনেকগুলো value-র একটি সেট যা পরবর্তীতে টাইপ হিসেবেও ব্যবহার করা যায় এবং অবজেক্ট হিসেবেও ব্যবহার করা যায়।  

### উদাহরণ:

```ts
enum userRole {
    Admin = 'Admin',
    Editor = 'Editor',
    Viewer = 'Viewer',
}

const canEdit = (role: userRole) => {
    if (role === userRole.Admin || role === userRole.Editor) {
        return true;
    } else {
        return false;
    }
}

const isEditPermissible = canEdit(userRole.Editor);
console.log(isEditPermissible); // true
