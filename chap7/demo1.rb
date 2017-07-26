# 秒转为天时分秒
def sec2dhms(secs)
  time = secs.round
  sec = time%60

  time /= 60 #time是变量才可以
  mins = time % 60

  time /= 60
  hrs = time % 60

  time /= 24
  days = time

  [days, hrs, mins, sec]
end

t = sec2dhms(1000000)
puts t


