# -*- coding: UTF-8 -*-
# here 文档
str = <<'EOF'
This is good
thing hahah
hah
EOF
# puts str

# puts %Q[this is xiao xie]


str1 =<<EOF
this is 
a 
chapter
EOF

# puts str1


str2 =<<-EOF
this is a 
good thing
EOF
# puts str2

string=<<EOF
    <div class='clearfix' style='padding:10px 0'>
     <form action="/admin/account/users?type=lender" class="form-inline pull-left" method="get" role="form">
     <label>用户</label>
      <input class="form-control" name="key_info" placeholder="用户名/姓名/手机号/ID" type="text">
      <input class="btn btn-info btn-sm" type="submit" value="查找">
    </form>
    </div>
EOF

# puts string



str3 =<<EOF

Once upon\na time ...\n
The End\n

EOF
num = 0
str3.each do |line|
  num +=1
  puts "Line #{num} : #{line}"
end