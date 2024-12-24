// #include<iostream>
// #include<stack>
// #include<vector>
// #include<queue>
// #include<map>
// #include<list>
// #include<string>
// #include<limits>
// #include<algorithm>
// using namespace std;
// #define createAndInputVec(a, n, iter) vector<int> a(n); for(auto iter = a.begin(); iter != a.end(); ++iter) { cin >> *iter; }
// #define inputVec(a, iter) for(auto iter = a.begin(); iter != a.end(); ++iter) { cin >> *iter; }
// #define iterVec(name, iter) for(auto iter = name.begin(); iter != name.end(); ++iter)
// #define printVec(vecName, iter) for(auto iter = vecName.begin(); iter != vecName.end(); ++iter) { cout << *iter <<" ";}

#include<iostream>
#include<vector>
using namespace std;
#define ll long long
ll solve(int index,char prevChar,string &s,vector<vector<ll> > &dp){
    if(index >= s.size())
    return 0;

    if(dp[index][prevChar - 'a'] != INT_MAX)
    return dp[index][prevChar - 'a'];

    for(int i = 0;i<26;i++){
        if(abs(prevChar - i -'a') <= 1)
        continue;
        else {
            if(s[index]-'a' == i){
                dp[index][prevChar - 'a'] = min(dp[index][prevChar - 'a'],solve(index+1,i+'a',s,dp));
            }
            else{
                dp[index][prevChar - 'a'] = min(dp[index][prevChar - 'a'],1+solve(index+1,i+'a',s,dp));
            }
        }
    }
    return dp[index][prevChar - 'a'];
}

int main(){
    string s;
    cin>>s;

    vector<vector<ll> > dp(s.size(),vector<ll>(28,INT_MAX));

    cout<<solve(0,'z'+2,s,dp);
}


// #include<iostream>
// #include<vector>
// using namespace std;
// #define ll long long
// ll solve(int index, char prevChar, string &s, vector<vector<ll> > &dp) {
//     if (index >= s.size()) return 0;

//     if (dp[index][prevChar - 'a'] != -1) return dp[index][prevChar - 'a'];

//     ll minOperations = LLONG_MAX;

//     for (int i = 0; i < 26; i++) {
//         char newChar = 'a' + i;
//         ll cost = (s[index] != newChar) ? 1 : 0; 

//         if (prevChar == 'z' + 1 || abs(prevChar - newChar) > 1) {
//             minOperations = min(minOperations, cost + solve(index + 1, newChar, s, dp));
//         }
//     }
//     return dp[index][prevChar - 'a'] = minOperations;
// }

// int main() {
//     string s;
//     cin >> s;

//     vector<vector<ll> > dp(s.size(), vector<ll>(26, -1));

//     cout << solve(0, 'z' + 1, s, dp) << endl;

//     return 0;
// }
