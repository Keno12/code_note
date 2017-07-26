# check x o count
def XO(str)
  str.downcase.count('x') == str.downcase.count('o')
end

puts XO("xoox0xx")



